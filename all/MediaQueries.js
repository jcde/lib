import '@expo/match-media'
import { useMediaQuery } from "react-responsive"
import React from 'react'
const isLandscape = useMediaQuery({
  minDeviceWidth: 768,
})

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  container: {
    flexBasis: '30%',
    marginRight: 2
  },
})