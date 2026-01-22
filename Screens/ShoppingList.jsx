import React, { useRef } from 'react';
import { 
  View, 
  KeyboardAvoidingView,
  TextInput, 
  Platform, 
  StyleSheet, 
  TouchableWithoutFeedback, 
  Keyboard,
  InputAccessoryView,
  Button
} from 'react-native';

export default function ShoppingList() {
  const inputRef = useRef();
  const inputAccessoryViewID = 'doneButtonID';

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ flex: 1 }}>
          <TextInput
            ref={inputRef}
            style={styles.input}
            placeholder="Feel free to write any notes here such as your shopping list"
            multiline
            scrollEnabled
            textAlignVertical="top"
            inputAccessoryViewID={Platform.OS === 'ios' ? inputAccessoryViewID : undefined} 
            numberOfLines={4} // hint for placeholder to wrap
          />
        </View>
      </TouchableWithoutFeedback>

      {Platform.OS === 'ios' && (
        <InputAccessoryView nativeID={inputAccessoryViewID}>
          <View style={styles.accessory}>
            <Button title="Done" onPress={() => inputRef.current.blur()} /> {/* blur is basically lose focus, closes keyboard*/}
          </View>
        </InputAccessoryView>
      )}
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    textAlignVertical: 'top', // important
    fontSize: 16,
    lineHeight: 20, // improves multi-line placeholder
  },
  accessory: {
    backgroundColor: '#eee',
    padding: 8,
    alignItems: 'flex-end',
  },
});
