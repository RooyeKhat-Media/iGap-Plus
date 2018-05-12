import React from 'react';
import {ActivityIndicator, Picker as BasePicker, StyleSheet, Switch, Text} from 'react-native';
import {
  ActionButton,
  Avatar,
  Badge,
  BottomNavigation,
  Button,
  Dialog,
  DialogDefaultActions,
  Drawer,
  Icon,
  IconToggle,
  ListItem,
  RadioButton,
  RippleFeedback,
} from 'react-native-material-ui';
import FlatList from './FlatList';
import Modal from './Modal';
import AppModal from './AppModal';
import DialogModal from './DialogModal';
import Spinner from './Spinner';
import TextInput from './TextInput';
import ActionSheet from './ActionSheet';
import MCIcon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import ProgressBar from './ProgressBar';
import Form from './Form';
import TextInputField from './Form/fields/TextInputField';
import PickerField from './Form/fields/PickerField';
import PopupMenu from './PopupMenu';
import Confirm from './Confirm';
import LoadingDots from './LoadingDots';
import {IRANSans} from '../../constants/fonts/index';
import StatusBar from './StatusBar';
import Toolbar from './Toolbar';
import KeyboardAvoidingView from './KeyboardAvoidingView';
import Checkbox from './Checkbox';
import SnackBar from './SnackBar';

const defaultTextStyle = StyleSheet.create({
  defaultStyle: {
    ...IRANSans,
  },
});
let textRender = Text.prototype.render;
Text.prototype.render = function(...args) {
  let origin = textRender.call(this, ...args);
  return React.cloneElement(origin, {
    style: [defaultTextStyle.defaultStyle, origin.props.style],
  });
};


export {
  AppModal,
  Switch,
  Checkbox,
  ActivityIndicator,
  Button,
  Toolbar,
  Dialog,
  DialogDefaultActions,
  Icon,
  IconToggle,
  ListItem,
  Avatar,
  FlatList,
  Modal,
  DialogModal,
  Spinner,
  TextInput,
  Drawer,
  MCIcon,
  BottomNavigation,
  ActionSheet,
  Badge,
  ProgressBar,
  BasePicker,
  Form,
  TextInputField,
  PickerField,
  RadioButton,
  PopupMenu,
  Confirm,
  LoadingDots,
  StatusBar,
  ActionButton,
  KeyboardAvoidingView,
  RippleFeedback,
  SnackBar,
};