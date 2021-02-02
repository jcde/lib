import { StyleSheet, View, Text, TouchableOpacity, TextInput, NativeSyntheticEvent, TextInputSubmitEditingEventData, SectionList } from 'react-native'
import { CheckBox } from 'react-native-elements'
import { useDispatch, useSelector } from 'react-redux'

// from https://github.com/jcde/adaptaki
const SectionList = () => {
  const dispatch = useDispatch()
  const model = useSelector(store => store).model ?? {
    subject: 5,
    exam: 7,
    questions: []
  }
  const DATA = [
    {
      subject: "Размеры и единицы измерения",
      key: 9,
      data: [
        { theme: "Единицы измерения времени", key: 1, count: 10 },
        { theme: "Единицы измерения длины", key: 2, count: 9 },
      ]
    },
  ]

  const sectionCount = (sectionKey) => {
    let result = ''
    if (!model.questions) // BAD
      model.questions = []
    model.questions.forEach(q => {
      if (q.num == sectionKey)
        result = q.count
    })
    return result
  }
  const checkValueOld = (valueOld, e) => {
    if (isNaN(valueOld))
      valueOld = 0

    let value
    if (typeof e == "number") {
      value = valueOld + e
    }
    else {
      value = +e.nativeEvent.text
      e.target.value = null
    }
    if (!isNaN(value)) {
      if (value < 0)
        value = 0
    }
    return value
  }
  const sectionCountChanged = (sectionKey, e: NativeSyntheticEvent<TextInputSubmitEditingEventData> | number) => {
    let value = checkValueOld(+sectionCount(sectionKey), e)

    let q = model.questions.find(q => q.num == sectionKey)
    if (!q) {
      q = { num: sectionKey }
      model.questions.push(q)
    }
    q.count = value
    dispatch({ type: 'model', value: { subject: 5, exam: 7, questions: model.questions } })
  }


  const isThemeChecked = (sectionKey, themeKey) => {
    let result = ''
    model.questions.forEach(q => {
      if (q.num == sectionKey && q.themes)
        q.themes.forEach(theme => {
          if (theme.id == themeKey) {
            result = theme.count
          }
        })
    })
    return result
  }

  const findTheme = (sectionKey, themeKey) => {
    let result = { qOld: null, themeOld: -1 }
    model.questions.forEach(q => {
      if (q.num == sectionKey) {
        result.qOld = q
        if (q.themes)
          q.themes.forEach(theme => {
            if (theme.id == themeKey)
              result.themeOld = q.themes.indexOf(theme)
          })
        else
          q.themes = []
      }
    })
    return result
  }

  const newModelAfterThemeRechecked = (sectionKey, themeKey) => {
    let result = findTheme(sectionKey, themeKey)
    let qOld = result.qOld
    let themeOld = result.themeOld

    let newCount = 1
    let t = { id: themeKey, count: newCount }

    if (qOld) {
      if (themeOld == -1)
        qOld.themes.push(t)
      else {
        qOld.themes.splice(themeOld, 1)
        if (!qOld.themes.length) {
          delete qOld.themes
          model.questions.splice(model.questions.indexOf(qOld), 1)
        }
      }
    }
    else {
      model.questions.push({ num: sectionKey, themes: [t] })
    }

    return { subject: 5, exam: 7, questions: model.questions }
  }

  const themeCountChanged = (sectionKey, themeKey, e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => {
    let result = findTheme(sectionKey, themeKey)
    let qOld = result.qOld
    let themeOld = result.themeOld

    let value = checkValueOld(+isThemeChecked(sectionKey, themeKey), e)

    let t = { id: themeKey, count: value }
    if (qOld) {
      if (themeOld == -1)
        qOld.themes.push(t)
      else {
        qOld.themes.splice(themeOld, 1)
        qOld.themes.push(t)
      }
    } else {
      model.questions.push({ num: sectionKey, themes: [t] })
    }
    dispatch({ type: 'model', value: { subject: 5, exam: 7, questions: model.questions } })
  }


  const Header = ({ section }) => (
    <View style={styles.headerrow}>
      <Text style={styles.header}>
        <Text style={{ fontStyle: 'italic' }}>{section.key + '. '}</Text>
        {section.subject}
      </Text>
      <TextInput placeholder={sectionCount(section.key)}
        onSubmitEditing={e => sectionCountChanged(section.key, e)} style={styles.input} />
    </View>
  )
  const Theme = ({ e }) => (
    <View style={styles.headerrow}>
      <View style={styles.item}>
        <CheckBox title={e.item.theme} checked={isThemeChecked(e.section.key, e.item.key)} containerStyle={{ padding: 0 }}
          onPress={() => dispatch({ type: 'model', value: newModelAfterThemeRechecked(e.section.key, e.item.key) })} />
        <Text style={styles.theme}></Text>
      </View>
      <TextInput placeholder={isThemeChecked(e.section.key, e.item.key)}
        onSubmitEditing={ev => themeCountChanged(e.section.key, e.item.key, ev)} style={styles.input} />
      <Text style={{ fontSize: 12, marginLeft: 4 }}>{'из ' + e.item.count}</Text>
    </View>
  )
  return (
    <SectionList
      sections={DATA}
      renderSectionHeader={({ section }) => <Header section={section} />}
      renderItem={(e) => <Theme e={e} />}
    />
  )
}
const styles = StyleSheet.create({
  headerrow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  header: {
    fontSize: 24,
    flexBasis: '80%',
    marginLeft: 10,
    backgroundColor: "##e5e4ec",
  },
  item: {
    flexBasis: '70%',
    paddingHorizontal: 10,
    marginHorizontal: 8,
    backgroundColor: "#e4f1ea",
  },
  theme: {
    //margin: 0,
    fontSize: 18,
  },
  input: {
    width: 45,
    justifyContent: 'center',
    textAlign: 'center',
    padding: 5,
    fontSize: 16,
  },
})

export default SectionList