import React, {useState} from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';
import Signature from 'react-native-signature-canvas';

const SignInScroll = () => {
  const [signatureImage, setSignatureImage] = useState(null);
  const [signatureText, setSignatureText] = useState('Signature'); // State for the text below signature

  const handleSignatureOK = img => {
    setSignatureImage(img); // Save the image
    setSignatureText('Your Signature'); // Set the text below the signature
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.signatureContainer}>
        <Signature
          onOK={handleSignatureOK}
          descriptionText="Sign"
          clearText="Clear"
          confirmText="Save"
          imageType="image/jpeg"
        />
      </View>

      {signatureImage && (
        <View style={styles.textContainer}>
          <Text style={styles.signatureText}>{signatureText}</Text>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  signatureContainer: {
    height: 300,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  textContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  signatureText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default SignInScroll;
