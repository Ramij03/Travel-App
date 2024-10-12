import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import styles from './login.style'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { COLORS, SIZES } from '../../constants/theme'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import WidthSpacer from '../../components/Reusable/WidthSpacer'
import HeightSpacer from '../../components/Reusable/HeightSpacer'
import ReusableBtn from '../../components/Buttons/ReusableBtn'
import { useNavigation } from '@react-navigation/native'; // import navigation

const validationSchema = Yup.object().shape({
   password: Yup.string()
   .min(8, "Password must be at least 8 characters")
   .required("This Field is Required"),

   email: Yup.string()
   .email("Provide a valid email")
   .required("This Field is Required"),

   username: Yup.string()
   .required("This Field is Required"),
})

const Register = () => {
    const [loader, useLoader] = useState(false);
    const [response, setResponse] = useState(null);
    const [hide, setHide] = useState(false);
    const navigation = useNavigation(); // access the navigation object

    const handleLogin = (values) => {
        // Perform login logic, set response and loader if needed

        // Navigate to 'Bottom' screen after successful validation
        navigation.navigate('Bottom');
    };

  return (
    <View style={styles.container}>
      <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        handleLogin(values);
      }}
      >
        {({
            handleChange,
            touched,
            handleSubmit,
            values,
            errors,
            isValid,
            setFieldTouched,
        }) => (
            <View>
              <View style={styles.wrapper}>
                    <Text style={styles.label}>Username</Text>
                <View>
                <View 
                    style={styles.inputWrapper(touched.username ? COLORS.lightBlue : COLORS.gray)}>
                <MaterialCommunityIcons 
                  name='face-man-profile'
                  size={20}
                  color={COLORS.gray}
                />
                <WidthSpacer width={5} />
                <TextInput 
                  placeholder='Enter Username'
                  onFocus={() => { setFieldTouched('username') }}
                  onBlur={() => { setFieldTouched('username', "") }}
                  value={values.email}
                  onChangeText={handleChange('username')}  // fixed this line, it was incorrect
                  autoCapitalize='none'
                  autoCorrect={false}
                  style={{ flex: 1 }}
                />
                </View>
                {touched.username && errors.username && (
                  <Text style={styles.error}>{errors.username}</Text>
                )}
                </View>
                </View>
                <View style={styles.wrapper}>
                    <Text style={styles.label}>Email</Text>
                <View>
                <View 
                    style={styles.inputWrapper(touched.email ? COLORS.lightBlue : COLORS.gray)}>
                <MaterialCommunityIcons 
                  name="email-outline"
                  size={20}
                  color={COLORS.gray}
                />
                <WidthSpacer width={5} />
                <TextInput 
                  placeholder='Enter Email'
                  onFocus={() => { setFieldTouched('email') }}
                  onBlur={() => { setFieldTouched('email', "") }}
                  value={values.email}
                  onChangeText={handleChange('email')}  // fixed this line, it was incorrect
                  autoCapitalize='none'
                  autoCorrect={false}
                  style={{ flex: 1 }}
                />
                </View>
                {touched.email && errors.email && (
                  <Text style={styles.error}>{errors.email}</Text>
                )}
                </View>
                </View>

                <View style={styles.wrapper}>
                    <Text style={styles.label}>Password</Text>
                <View>
                <View 
                    style={styles.inputWrapper(touched.password ? COLORS.lightBlue : COLORS.gray)}>
                <MaterialCommunityIcons 
                  name="lock-outline"
                  size={20}
                  color={COLORS.gray}
                />
                <WidthSpacer width={5} />
                <TextInput 
                  secureTextEntry={hide}
                  placeholder='Enter Password'
                  onFocus={() => { setFieldTouched('password') }}
                  onBlur={() => { setFieldTouched('password', "") }}
                  value={values.password}
                  onChangeText={handleChange('password')}
                  autoCapitalize='none'
                  autoCorrect={false}
                  style={{ flex: 1 }}
                />

                <TouchableOpacity onPress={() => {
                    setHide(!hide)
                }}>
                  <MaterialCommunityIcons 
                    name={hide ? "eye-outline" : "eye-off-outline"}
                    size={18}
                  />
                </TouchableOpacity>
                </View>
                {touched.password && errors.password && (
                  <Text style={styles.error}>{errors.password}</Text>
                )}
                </View>
                </View>
                
                <HeightSpacer height={20} />
                
                <ReusableBtn 
                  onPress={handleSubmit} // triggers form validation and submit
                  btnText={"Sign Up"}
                  width={(SIZES.width-50)}
                  backgroundcolor={COLORS.green}
                  borderWidth={1}
                  borderColor={COLORS.green}
                  textColor={COLORS.white}
                />
            </View>
        )}
      </Formik>
    </View>
  )
}

export default Register
