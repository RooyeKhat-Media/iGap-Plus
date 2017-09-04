import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import Swiper from 'react-native-swiper';
import {Button} from '../BaseUI';
import {injectIntl, intlShape} from 'react-intl';
import {MemoizeResponsiveStyleSheet, responsive} from '../../modules/Responsive';
import styleSheet from './index.styles';
import * as _ from 'lodash';
import i18n from '../../i18n';
import {NORMAL_HEIGHT, NORMAL_WIDTH} from '../../constants/screenBreakPoints';
import DimensionLimiter from '../BaseUI/DimensionLimiter';

const uniqueId = _.uniqueId();

class Intro extends React.Component {
  constructor() {
    super();
    this.state = {
      currentPage: 0,
    };
  }

  _handleWhenScrollEnd = (e, state, contest) => {
    this.setState({currentPage: state.index});
  };

  render() {
    const {styles} = this;
    const {currentPage} = this.state;
    const {pages, onBtnClick, intl} = this.props;

    let boxWidth, boxHeight;
    const {width, height} = this.props.window;
    if (width > height) {
      boxWidth = _.min([width, NORMAL_HEIGHT]);
      boxHeight = _.min([height, NORMAL_WIDTH]);
    } else {
      boxWidth = _.min([width, NORMAL_WIDTH]);
      boxHeight = _.min([height, NORMAL_HEIGHT]);
    }
    boxHeight -= 70;
    const isLastPage = currentPage === pages.length - 1;

    return (
      <DimensionLimiter id={uniqueId} width={NORMAL_WIDTH} height={NORMAL_HEIGHT} wrapperStyle={styles.wrapper}
        layoutStyle={styles.layout}>
        <View style={[styles.swiperWrap]}>
          <Swiper loop={false}
            index={currentPage}
            width={boxWidth}
            height={boxHeight}
            showsButtons={false}
            onMomentumScrollEnd={this._handleWhenScrollEnd}
            dotStyle={styles.dotStyle}
            paginationStyle={styles.paginationStyle}
            activeDotStyle={styles.activeDotStyle}>

            {pages.map(({ImageSvg, title, subtitle}, idx) => (
              <View key={idx} style={styles.slide}>
                <View style={styles.svgWrap}>
                  <ImageSvg style={styles.svgStyle}/>
                </View>
                <View style={styles.titleWrap}>
                  <Text style={styles.title}>{title}</Text>
                  <Text style={styles.subTitle}>
                    {subtitle}
                  </Text>
                </View>
              </View>
            ))}

          </Swiper>
        </View>
        <View style={styles.btnWrap}>
          <Button style={isLastPage ? styles.btnActive : styles.btn}
            upperCase={false} primary raised accent={false}
            onPress={onBtnClick}
            text={isLastPage ? intl.formatMessage(i18n.introBtnStart) : intl.formatMessage(i18n.introBtnSkip)}/>
        </View>
      </DimensionLimiter>
    );
  }

  get styles() {
    return MemoizeResponsiveStyleSheet(styleSheet);
  }
}

Intro.propTypes = {
  onBtnClick: PropTypes.func.isRequired,
  pages: PropTypes.arrayOf(PropTypes.shape({
    ImageSvg: PropTypes.func.isRequired,
    title: PropTypes.element.isRequired,
    subtitle: PropTypes.element.isRequired,
  })).isRequired,
  intl: intlShape.isRequired,
};

export default injectIntl(responsive(Intro));