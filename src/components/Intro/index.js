import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import Swiper from 'react-native-swiper';
import {Button} from '../BaseUI';
import {injectIntl, intlShape} from 'react-intl';
import {MemoizeResponsiveStyleSheet, responsive} from '../../modules/Responsive';
import styleSheet from './index.styles';
import {min, uniqueId} from 'lodash';
import i18n from '../../i18n';
import {NORMAL_HEIGHT, NORMAL_WIDTH} from '../../constants/screenBreakPoints';
import DimensionLimiter from '../BaseUI/DimensionLimiter';

const _uniqueId = uniqueId();

class Intro extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      currentPage: 0,
    };
  }

  _handleWhenScrollEnd = (e, state, contest) => {
    this.setState({currentPage: state.index});
  };

  render() {
    const styles = this.getStyles();
    const {currentPage} = this.state;
    const {pages, onBtnClick, intl} = this.props;

    let boxWidth, boxHeight;
    const {width, height} = this.props.window;
    if (width > height) {
      boxWidth = min([width, NORMAL_HEIGHT]);
      boxHeight = min([height, NORMAL_WIDTH]);
    } else {
      boxWidth = min([width, NORMAL_WIDTH]);
      boxHeight = min([height, NORMAL_HEIGHT]);
    }
    boxHeight -= 70;
    const isLastPage = currentPage === pages.length - 1;

    return (
      <DimensionLimiter id={_uniqueId} width={NORMAL_WIDTH} height={NORMAL_HEIGHT} wrapperStyle={styles.wrapper}
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

  getStyles = () => {
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