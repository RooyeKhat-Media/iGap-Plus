/* eslint-disable no-useless-escape */
import {createElement} from 'react';
import {Text} from 'react-native';
import _ from 'lodash';
import SimpleMarkdown from 'simple-markdown';
import queryString from 'query-string';
import Linking from '../Linking/index';
import styleSheet from './index.styles';
import {ClientCheckInviteLink, ClientResolveUsername} from '../Proto/index';
import {CLIENT_CHECK_INVITE_LINK, CLIENT_RESOLVE_USERNAME} from '../../constants/methods/index';
import Api from '../Api/index';
import MemoizeResponsiveStyleSheet from '../Responsive/MemoizeResponsiveStyleSheet';

const TLD = [
  'abogado', 'ac', 'academy', 'accountants', 'active', 'actor', 'ad', 'adult', 'ae', 'aero', 'af', 'ag', 'agency',
  'ai', 'airforce', 'al', 'allfinanz', 'alsace', 'am', 'amsterdam', 'an', 'android', 'ao', 'apartments', 'aq',
  'aquarelle', 'ar', 'archi', 'army', 'arpa', 'as', 'asia', 'associates', 'at', 'attorney', 'au', 'auction', 'audio',
  'autos', 'aw', 'ax', 'axa', 'az', 'ba', 'band', 'bank', 'bar', 'barclaycard', 'barclays', 'bargains', 'bayern', 'bb',
  'bd', 'be', 'beer', 'berlin', 'best', 'bf', 'bg', 'bh', 'bi', 'bid', 'bike', 'bingo', 'bio', 'biz', 'bj', 'black',
  'blackfriday', 'bloomberg', 'blue', 'bm', 'bmw', 'bn', 'bnpparibas', 'bo', 'boo', 'boutique', 'br', 'brussels', 'bs',
  'bt', 'budapest', 'build', 'builders', 'business', 'buzz', 'bv', 'bw', 'by', 'bz', 'bzh', 'ca', 'cab', 'cal',
  'camera', 'camp', 'cancerresearch', 'canon', 'capetown', 'capital', 'caravan', 'cards', 'care', 'career', 'careers',
  'cartier', 'casa', 'cash', 'cat', 'catering', 'cc', 'cd', 'center', 'ceo', 'cern', 'cf', 'cg', 'ch', 'channel',
  'chat', 'cheap', 'christmas', 'chrome', 'church', 'ci', 'citic', 'city', 'ck', 'cl', 'claims', 'cleaning', 'click',
  'clinic', 'clothing', 'club', 'cm', 'cn', 'co', 'coach', 'codes', 'coffee', 'college', 'cologne', 'com', 'community',
  'company', 'computer', 'condos', 'construction', 'consulting', 'contractors', 'cooking', 'cool', 'coop', 'country',
  'cr', 'credit', 'creditcard', 'cricket', 'crs', 'cruises', 'cu', 'cuisinella', 'cv', 'cw', 'cx', 'cy', 'cymru', 'cz',
  'dabur', 'dad', 'dance', 'dating', 'day', 'dclk', 'de', 'deals', 'degree', 'delivery', 'democrat', 'dental',
  'dentist', 'desi', 'design', 'dev', 'diamonds', 'diet', 'digital', 'direct', 'directory', 'discount', 'dj', 'dk',
  'dm', 'dnp', 'do', 'docs', 'domains', 'doosan', 'durban', 'dvag', 'dz', 'eat', 'ec', 'edu', 'education', 'ee', 'eg',
  'email', 'emerck', 'energy', 'engineer', 'engineering', 'enterprises', 'equipment', 'er', 'es', 'esq', 'estate', 'et',
  'eu', 'eurovision', 'eus', 'events', 'everbank', 'exchange', 'expert', 'exposed', 'fail', 'farm', 'fashion',
  'feedback', 'fi', 'finance', 'financial', 'firmdale', 'fish', 'fishing', 'fit', 'fitness', 'fj', 'fk', 'flights',
  'florist', 'flowers', 'flsmidth', 'fly', 'fm', 'fo', 'foo', 'forsale', 'foundation', 'fr', 'frl', 'frogans', 'fund',
  'furniture', 'futbol', 'ga', 'gal', 'gallery', 'garden', 'gb', 'gbiz', 'gd', 'ge', 'gent', 'gf', 'gg', 'ggee', 'gh',
  'gi', 'gift', 'gifts', 'gives', 'gl', 'glass', 'gle', 'global', 'globo', 'gm', 'gmail', 'gmo', 'gmx', 'gn', 'goog',
  'google', 'gop', 'gov', 'gp', 'gq', 'gr', 'graphics', 'gratis', 'green', 'gripe', 'gs', 'gt', 'gu', 'guide',
  'guitars', 'guru', 'gw', 'gy', 'hamburg', 'hangout', 'haus', 'healthcare', 'help', 'here', 'hermes', 'hiphop',
  'hiv', 'hk', 'hm', 'hn', 'holdings', 'holiday', 'homes', 'horse', 'host', 'hosting', 'house', 'how', 'hr', 'ht',
  'hu', 'ibm', 'id', 'ie', 'ifm', 'il', 'im', 'immo', 'immobilien', 'in', 'industries', 'info', 'ing', 'ink',
  'institute', 'insure', 'int', 'international', 'investments', 'io', 'iq', 'ir', 'irish', 'is', 'it', 'iwc', 'jcb',
  'je', 'jetzt', 'jm', 'jo', 'jobs', 'joburg', 'jp', 'juegos', 'kaufen', 'kddi', 'ke', 'kg', 'kh', 'ki', 'kim',
  'kitchen', 'kiwi', 'km', 'kn', 'koeln', 'kp', 'kr', 'krd', 'kred', 'kw', 'ky', 'kyoto', 'kz', 'la', 'lacaixa',
  'land', 'lat', 'latrobe', 'lawyer', 'lb', 'lc', 'lds', 'lease', 'legal', 'lgbt', 'li', 'lidl', 'life', 'lighting',
  'limited', 'limo', 'link', 'lk', 'loans', 'london', 'lotte', 'lotto', 'lr', 'ls', 'lt', 'ltda', 'lu', 'luxe',
  'luxury', 'lv', 'ly', 'ma', 'madrid', 'maison', 'management', 'mango', 'market', 'marketing', 'marriott', 'mc',
  'md', 'me', 'media', 'meet', 'melbourne', 'meme', 'memorial', 'menu', 'mg', 'mh', 'miami', 'mil', 'mini', 'mk',
  'ml', 'mm', 'mn', 'mo', 'mobi', 'moda', 'moe', 'monash', 'money', 'mormon', 'mortgage', 'moscow', 'motorcycles',
  'mov', 'mp', 'mq', 'mr', 'ms', 'mt', 'mu', 'museum', 'mv', 'mw', 'mx', 'my', 'mz', 'na', 'nagoya', 'name', 'navy',
  'nc', 'ne', 'net', 'network', 'neustar', 'new', 'nexus', 'nf', 'ng', 'ngo', 'nhk', 'ni', 'nico', 'ninja', 'nl', 'no',
  'np', 'nr', 'nra', 'nrw', 'ntt', 'nu', 'nyc', 'nz', 'okinawa', 'om', 'one', 'ong', 'onl', 'ooo', 'org', 'organic',
  'osaka', 'otsuka', 'ovh', 'pa', 'paris', 'partners', 'parts', 'party', 'pe', 'pf', 'pg', 'ph', 'pharmacy', 'photo',
  'photography', 'photos', 'physio', 'pics', 'pictures', 'pink', 'pizza', 'pk', 'pl', 'place', 'plumbing', 'pm', 'pn',
  'pohl', 'poker', 'porn', 'post', 'pr', 'praxi', 'press', 'pro', 'prod', 'productions', 'prof', 'properties',
  'property', 'ps', 'pt', 'pub', 'pw', 'py', 'qa', 'qpon', 'quebec', 're', 'realtor', 'recipes', 'red', 'rehab',
  'reise', 'reisen', 'reit', 'ren', 'rentals', 'repair', 'report', 'republican', 'rest', 'restaurant', 'reviews',
  'rich', 'rio', 'rip', 'ro', 'rocks', 'rodeo', 'rs', 'rsvp', 'ru', 'ruhr', 'rw', 'ryukyu', 'sa', 'saarland', 'sale',
  'samsung', 'sarl', 'saxo', 'sb', 'sc', 'sca', 'scb', 'schmidt', 'schule', 'schwarz', 'science', 'scot', 'sd', 'se',
  'services', 'sew', 'sexy', 'sg', 'sh', 'shiksha', 'shoes', 'shriram', 'si', 'singles', 'sj', 'sk', 'sky', 'sl', 'sm',
  'sn', 'so', 'social', 'software', 'sohu', 'solar', 'solutions', 'soy', 'space', 'spiegel', 'sr', 'st', 'style', 'su',
  'supplies', 'supply', 'support', 'surf', 'surgery', 'suzuki', 'sv', 'sx', 'sy', 'sydney', 'systems', 'sz', 'taipei',
  'tatar', 'tattoo', 'tax', 'tc', 'td', 'technology', 'tel', 'temasek', 'tennis', 'tf', 'tg', 'th', 'tienda', 'tips',
  'tires', 'tirol', 'tj', 'tk', 'tl', 'tm', 'tn', 'to', 'today', 'tokyo', 'tools', 'top', 'toshiba', 'town', 'toys',
  'tp', 'tr', 'trade', 'training', 'travel', 'trust', 'tt', 'tui', 'tv', 'tw', 'tz', 'ua', 'ug', 'uk', 'university',
  'uno', 'uol', 'us', 'uy', 'uz', 'va', 'vacations', 'vc', 've', 'vegas', 'ventures', 'versicherung', 'vet', 'vg', 'vi',
  'viajes', 'video', 'villas', 'vision', 'vlaanderen', 'vn', 'vodka', 'vote', 'voting', 'voto', 'voyage', 'vu', 'wales',
  'wang', 'watch', 'webcam', 'website', 'wed', 'wedding', 'wf', 'whoswho', 'wien', 'wiki', 'williamhill', 'wme', 'work',
  'works', 'world', 'ws', 'wtc', 'wtf', '佛山', '集团', '在线', '한국', 'ভারত', '八卦', 'موقع', '公益', '公司', '移动',
  '我爱你', 'москва', 'қаз', 'онлайн', 'сайт', 'срб', '淡马锡', 'орг', '삼성', 'சிங்கப்பூர்', '商标', '商店', '商城', 'дети',
  'мкд', '中文网', '中信', '中国', '中國', '谷歌', 'భారత్', 'ලංකා', 'ભારત', 'भारत', '网店', 'संगठन', '网络', 'укр', '香港',
  '台湾', '台灣', '手机', 'мон', 'الجزائر', 'عمان', 'ایران', 'امارات', 'بازار', 'الاردن', 'بھارت', 'المغرب', 'السعودية',
  'مليسيا', 'شبكة', 'გე', '机构', '组织机构', 'ไทย', 'سورية', 'рус', 'рф', 'تونس', 'みんな', 'グーグル', '世界', 'ਭਾਰਤ',
  '网址', '游戏', 'vermögensberater', 'vermögensberatung', '企业', 'مصر', 'قطر', '广东', 'இலங்கை', 'இந்தியா', '新加坡',
  'فلسطين', '政务', 'xxx', 'xyz', 'yachts', 'yandex', 'ye', 'yoga', 'yokohama', 'youtube', 'yt', 'za', 'zip', 'zm',
  'zone', 'zuerich', 'zw',
];

const alphaCharsRegExp = 'a-z' +
  '\\u00c0-\\u00d6\\u00d8-\\u00f6\\u00f8-\\u00ff' + // Latin-1
  '\\u0100-\\u024f' + // Latin Extended A and B
  '\\u0253\\u0254\\u0256\\u0257\\u0259\\u025b\\u0263\\u0268\\u026f\\u0272\\u0289\\u028b' + // IPA Extensions
  '\\u02bb' + // Hawaiian
  '\\u0300-\\u036f' + // Combining diacritics
  '\\u1e00-\\u1eff' + // Latin Extended Additional (mostly for Vietnamese)
  '\\u0400-\\u04ff\\u0500-\\u0527' + // Cyrillic
  '\\u2de0-\\u2dff\\ua640-\\ua69f' + // Cyrillic Extended A/B
  '\\u0591-\\u05bf\\u05c1-\\u05c2\\u05c4-\\u05c5\\u05c7' +
  '\\u05d0-\\u05ea\\u05f0-\\u05f4' + // Hebrew
  '\\ufb1d-\\ufb28\\ufb2a-\\ufb36\\ufb38-\\ufb3c\\ufb3e\\ufb40-\\ufb41' +
  '\\ufb43-\\ufb44\\ufb46-\\ufb4f' + // Hebrew Pres. Forms
  '\\u0610-\\u061a\\u0620-\\u065f\\u066e-\\u06d3\\u06d5-\\u06dc' +
  '\\u06de-\\u06e8\\u06ea-\\u06ef\\u06fa-\\u06fc\\u06ff' + // Arabic
  '\\u0750-\\u077f\\u08a0\\u08a2-\\u08ac\\u08e4-\\u08fe' + // Arabic Supplement and Extended A
  '\\ufb50-\\ufbb1\\ufbd3-\\ufd3d\\ufd50-\\ufd8f\\ufd92-\\ufdc7\\ufdf0-\\ufdfb' + // Pres. Forms A
  '\\ufe70-\\ufe74\\ufe76-\\ufefc' + // Pres. Forms B
  '\\u200c' + // Zero-Width Non-Joiner
  '\\u0e01-\\u0e3a\\u0e40-\\u0e4e' + // Thai
  '\\u1100-\\u11ff\\u3130-\\u3185\\uA960-\\uA97F\\uAC00-\\uD7AF\\uD7B0-\\uD7FF' + // Hangul (Korean)
  '\\u3003\\u3005\\u303b' + // Kanji/Han iteration marks
  '\\uff21-\\uff3a\\uff41-\\uff5a' + // full width Alphabet
  '\\uff66-\\uff9f' + // half width Katakana
  '\\uffa1-\\uffdc'; // half width Hangul (Korean)

const alphaNumericRegExp = '0-9\_' + alphaCharsRegExp;

const domainAddChars = '\u00b7';

// Based on Regular Expression for URL validation by Diego Perini
const urlRegExp = '((?:https?|ftp)://|mailto:)?' +
  // user:pass authentication
  '(?:\\S{1,64}(?::\\S{0,64})?@)?' +
  '(?:' +
  // sindresorhus/ip-regexp
  '(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])(?:\\.(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])){3}' +
  '|' +
  // host name
  '[' + alphaCharsRegExp + '0-9][' + alphaCharsRegExp + domainAddChars + '0-9\-]{0,64}' +
  // domain name
  '(?:\\.[' + alphaCharsRegExp + '0-9][' + alphaCharsRegExp + domainAddChars + '0-9\-]{0,64}){0,10}' +

  // TLD identifier
  '(?:\\.(xn--[0-9a-z]{2,16}|[' + alphaCharsRegExp + ']{2,24}))' +
  ')' +
  // port number
  '(?::\\d{2,5})?' +
  // resource path
  '(?:/(?:\\S{0,255}[^\\s.;,(\\[\\]{}<>"\'])?)?';

const emailRegExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function checkBrackets(url) {
  let urlLength = url.length;
  const urlOpenBrackets = url.split('(').length - 1;
  let urlCloseBrackets = url.split(')').length - 1;

  while (urlCloseBrackets > urlOpenBrackets &&
  url.charAt(urlLength - 1) === ')') {
    url = url.substr(0, urlLength - 1);
    urlCloseBrackets--;
    urlLength--;
  }
  if (urlOpenBrackets > urlCloseBrackets) {
    url = url.replace(/\)+$/, '');
  }
  return url;
}

const styles = MemoizeResponsiveStyleSheet(styleSheet);
const rules = {
  del: {
    react: (node, output, state) => {
      state.withinText = true;
      return createElement(Text, {
        key: state.key,
        style: styles.del,
      }, output(node.content, state));
    },
  },
  em: {
    react: (node, output, state) => {
      state.withinText = true;
      return createElement(Text, {
        key: state.key,
        style: styles.em,
      }, output(node.content, state));
    },
  },
  link: {
    react: (node, output, state) => {
      state.withinText = true;
      const openURL = (url) => {
        return Linking.openURL(url);
      };
      return createElement(Text, {
        style: styles.link,
        key: state.key,
        onPress: () => openURL(node.target),
      }, output(node.content, state));
    },
  },
  linking: {
    order: SimpleMarkdown.defaultRules.text.order - 0.5,
    match: SimpleMarkdown.inlineRegex(
      new RegExp('^igap://([a-z0-9_=?]+)\\s*', 'i')
    ),
    parse: function(capture, parse, state) {
      let url = capture[0];
      let igap;

      const path = capture[1].split('?');
      const parsed = queryString.parse(path[1]);
      switch (_.toLower(path[0])) {
        case 'join':
          igap = {
            type: 'join',
            token: parsed.invite,
          };
          break;
        case 'resolve':
          return {
            type: 'mention',
            content: [{
              type: 'text',
              content: capture[0],
            }],
            target: parsed.domain,
          };
      }
      return {
        type: 'url',
        content: [{
          type: 'text',
          content: capture[0],
        }],
        target: url,
        title: undefined,
        igap,
      };
    },
  },
  mention: {
    order: SimpleMarkdown.defaultRules.text.order - 0.5,
    match: SimpleMarkdown.inlineRegex(
      /^@([a-zA-Z\d_]{4,32})\s*/
    ),
    parse: function(capture, parse, state) {
      return {
        type: 'mention',
        content: [{
          type: 'text',
          content: capture[0],
        }],
        target: capture[1],
      };
    },
    react: (node, output, state) => {
      state.withinText = true;
      return createElement(Text, {
        style: styles.mention,
        key: state.key,
        onPress: () => {
          if (node.target) {
            const clientResolveUsername = new ClientResolveUsername();
            clientResolveUsername.setUsername(node.target);
            Api.invoke(CLIENT_RESOLVE_USERNAME, clientResolveUsername);
          }
        },
      }, output(node.content, state));
    },
  },
  paragraph: {
    match: SimpleMarkdown.blockRegex(
      /^([\s\S]*)/
    ),
    react: (node, output, state) => {
      return createElement(Text, {
        key: state.key,
        style: styles.paragraph,
      }, output(node.content, state));
    },
  },
  strong: {
    react: (node, output, state) => {
      state.withinText = true;
      return createElement(Text, {
        key: state.key,
        style: styles.strong,
      }, output(node.content, state));
    },
  },
  tag: {
    order: SimpleMarkdown.defaultRules.text.order - 0.5,
    match: SimpleMarkdown.inlineRegex(
      new RegExp('^#([' + alphaNumericRegExp + ']{2,64})\\s*', 'i')
    ),
    parse: function(capture, parse, state) {
      return {
        type: 'tag',
        content: [{
          type: 'text',
          content: capture[0],
        }],
        target: capture[1],
      };
    },
    react: (node, output, state) => {
      state.withinText = true;
      return createElement(Text, {
        style: styles.tag,
        key: state.key,
        onPress: () => {
        },
      }, output(node.content, state));
    },
  },
  text: {
    match: SimpleMarkdown.inlineRegex(
      /^[\s\S]+?(?=[*[_~@#]|(?:(?:https?|ftp|igap):\/\/|mailto:)|$)/i
    ),
    react: (node, output, state) => {
      return createElement(Text, {
        key: state.key,
      }, node.content);
    },
  },
  u: {
    react: (node, output, state) => {
      state.withinText = true;
      return createElement(Text, {
        key: state.key,
        style: styles.u,
      }, output(node.content, state));
    },
  },
  url: {
    match: SimpleMarkdown.inlineRegex(
      new RegExp('^(' + urlRegExp + ')\\s*', 'i')
    ),
    parse: function(capture, parse, state) {
      if (capture[1]) {
        let email = capture[1];
        if (_.startsWith(_.toLower(email), 'mailto:')) {
          email = email.substring(7);
        }
        if (emailRegExp.test(email)) {
          return {
            type: 'link',
            content: [{
              type: 'text',
              content: capture[0],
            }],
            target: 'mailto:' + email,
            title: undefined,
          };
        }
      }

      let url = false;
      let protocol = capture[2];
      const tld = capture[3];

      if (tld) { // URL
        if (!protocol && (tld.substr(0, 4) === 'xn--' || TLD.indexOf(tld.toLowerCase()) !== -1)) {
          protocol = 'http://';
        }
        if (protocol) {
          const balanced = checkBrackets(capture[1]);
          if (balanced.length !== capture[1].length) {
            capture[1] = balanced;
          }
          url = (capture[2] ? '' : protocol) + capture[1];
        }
      } else { // IP address
        url = (capture[2] ? '' : 'http://') + capture[1];
      }

      if (url) {
        const iGapMatch = url.match(/^https?:\/\/(?:www\.)?igap\.net\/(.+)/i);
        let igap = null;
        if (iGapMatch) {
          const path = iGapMatch[1].split('/');
          switch (_.toLower(path[0])) {
            case 'join':
              url = 'igap://join?invite=' + path[1];
              igap = {
                type: 'join',
                token: path[1],
              };
              break;
            default:
              if (3 < path[0].length) {
                if (path[1] && path[1].match(/^\d+$/)) {
                  // url = 'igap://resolve?domain=' + path[0] + '&post=' + path[1];
                  return {
                    type: 'mention',
                    content: [{
                      type: 'text',
                      content: capture[0],
                    }],
                    target: path[0],
                  };
                } else if (!path[1]) {
                  const domainQuery = path[0].split('?');
                  if (3 < domainQuery[0].length) {
                    // url = 'igap://resolve?domain=' + domainQuery[0] + (domainQuery[1] ? '&' + domainQuery[1] : '');
                    return {
                      type: 'mention',
                      content: [{
                        type: 'text',
                        content: capture[0],
                      }],
                      target: domainQuery[0],
                    };
                  }
                }
              }
          }
          if (_.startsWith(_.toLower(url), 'http://')) {
            url = 'https://' + url.substring(7);
          }
        }
        return {
          type: 'url',
          content: [{
            type: 'text',
            content: capture[0],
          }],
          target: url,
          title: undefined,
          igap,
        };
      }

      return {
        type: 'text',
        content: capture[0],
      };
    },
    react: (node, output, state) => {
      state.withinText = true;
      const openURL = (url) => {
        return Linking.openURL(url);
      };
      return createElement(Text, {
        key: state.key,
        style: styles.url,
        onPress: () => {
          if (node.igap) {
            const igap = node.igap;
            switch (igap.type) {
              case 'join':
                const clientCheckInviteLink = new ClientCheckInviteLink();
                clientCheckInviteLink.setInviteToken(igap.token);
                Api.invoke(CLIENT_CHECK_INVITE_LINK, clientCheckInviteLink);
                break;
            }
          } else {
            openURL(node.target);
          }
        },
      }, output(node.content, state));
    },
  },
};


export default _.merge({}, _.pick(SimpleMarkdown.defaultRules, _.keys(rules)), rules);