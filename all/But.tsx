import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const But = (props) => (
  <TouchableOpacity onPress={props.onPress} disabled={props.disabled} >
    <Text style={[
      { backgroundColor: props.disabled ? 'lightgray' : 'gray' },
      { fontSize: props.fontSize ?? 24 },
      styles.button,
    ]}>{props.children}</Text></TouchableOpacity>
)

const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    textAlign: 'center',
    color: 'white',
    width: 24,
    justifyContent: 'center',
  },
})

export default But