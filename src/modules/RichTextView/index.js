import React, {PureComponent} from 'react';
import {Text, View} from 'react-native';
import SimpleMarkdown from 'simple-markdown';
import PropTypes from 'prop-types';
import _ from 'lodash';
import rules from './rules';
import {parse} from './util';

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

  render() {
    const {rawText} = this.props;
    if (!rawText) {
      return null;
    }
    return (
      <View>
        {this._renderContent(rawText)}
      </View>
    );
  }

}

RichTextView.propTypes = {
  rawText: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
};
