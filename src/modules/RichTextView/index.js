import React, {PureComponent} from 'react';
import {Text} from 'react-native';
import SimpleMarkdown from 'simple-markdown';
import PropTypes from 'prop-types';
import _, {uniqueId} from 'lodash';
import rules from './rules';
import {parse} from './util';
import {appTheme} from '../../themes/default/index';
import MemoizeResponsiveStyleSheet from '../Responsive/MemoizeResponsiveStyleSheet';

export default class RichTextView extends PureComponent {
  _renderContent = (rawText) => {
    try {
      let tree;
      if (_.isString(rawText)) {
        tree = parse(rawText);
      } else {
        tree = rawText;
      }
      return SimpleMarkdown.reactFor(SimpleMarkdown.ruleOutput(rules, 'react'))(tree);
    } catch (errors) {
      // TODO [Amerehie] - 2017-12-25 2:05 PM - error log handler
      console.error(errors);
      if (_.isString(rawText)) {
        return (<Text>{rawText}</Text>);
      }
      return null;
    }
  };
  getStyles = () => {
    return MemoizeResponsiveStyleSheet(styleSheet);
  };

  render() {
    const styles = this.getStyles();
    const {rawText} = this.props;
    if (!rawText) {
      return null;
    }
    return (
      <Text style={styles.textStyle}>
        {this._renderContent(rawText)}
      </Text>
    );
  }

}

const uId = uniqueId();
const styleSheet = [
  uId,
  () => [
    {
      query: {},
      style: {
        textStyle: {
          color: appTheme.primaryText,
        },
      },
    },
  ],
  true,
];

RichTextView.propTypes = {
  rawText: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
};
