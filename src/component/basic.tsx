import { PropsWithChildren } from 'react';
import {
  StyleProp,
  TextStyle,
  Text as RNText,
  ViewStyle,
  View as View_,
  TextInput as TextInput_,
  TextInputChangeEventData,
  NativeSyntheticEvent,
  TextProps,
  ViewProps,
  ScrollViewProps,
  ScrollView
} from 'react-native';
import useTheme from '../hooks/useTheme';

interface ITextProps extends TextProps {
  style?: StyleProp<TextStyle>;
  fontSize?: number;
}

export const Text = ({ children, style, ...props }: ITextProps) => {
  const { theme } = useTheme();
  return (
    <RNText style={[{ color: theme.colors.text.primary }, style]} {...props}>
      {children}
    </RNText>
  );
};

export const PageView = ({ children, style,...props }: ViewProps) => {
  const { theme } = useTheme();
  return (
    <View_
      style={[{ backgroundColor: theme.colors.bg.primary, height: '100%' }, style]}
      {...props}>
      {children}
    </View_>
  );
};

export const ScrollPageView = ({ children, style,...props }: ScrollViewProps) => {
  const { theme } = useTheme();
  return (
    <ScrollView
      style={[{ backgroundColor: theme.colors.bg.primary, height: '100%' }, style]}
      {...props}>
      {children}
    </ScrollView>
  );
};

interface ITextInputProps extends PropsWithChildren {
  style?: StyleProp<TextStyle>;
  fontSize?: number;
  value?: string | undefined;
  placeHolder?: string | undefined;
  onChange?: (value: string) => void;
  onSubmit?: () => void;
}

export const TextInput = ({
  fontSize = 16,
  style,
  value,
  placeHolder,
  children,
  onChange,
  onSubmit,
}: ITextInputProps) => {
  const { theme } = useTheme();
  return (
    <TextInput_
      onChangeText={onChange}
      onSubmitEditing={onSubmit}
      placeholder={placeHolder}
      value={value}
      style={[
        {
          borderRadius: 8,
          backgroundColor: theme.colors.bg.inverted,
          color: theme.colors.text.inverted,
          paddingVertical: 8,
          fontSize,
        },
        style,
      ]}>
      {children}
    </TextInput_>
  );
};
