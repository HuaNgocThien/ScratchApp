import { StyleSheet } from 'react-native';
import { scale, scaleHeight } from '../../../utils';
import color from '../../../constants/colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: color.white,
  },
  body: {
    flex: 1,
    width: '100%',
    paddingHorizontal: scale(25),
    paddingTop: scaleHeight(20),
  },
  loginTxt: {
    color: color.text_title,
    fontSize: scaleHeight(14),
  },
  emailInput: {
    marginTop: scaleHeight(47),
  },
  passwordInput: {
    marginTop: scaleHeight(30),
  },
  mainBtn: {
    marginTop: scaleHeight(30),
  },
  newTitle: {
    color: color.text_content,
    fontSize: scaleHeight(14),
    width: '100%',
    textAlign: 'center',
    marginTop: scaleHeight(30),
  },
  createTitle: {
    color: color.primary_green,
    fontSize: scaleHeight(16),
    width: '100%',
    textAlign: 'center',
  }
});

export default styles;
