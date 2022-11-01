/* eslint-disable import/prefer-default-export */
// eslint-disable-next-line max-len
export const buttonWidth = (hover, isMobile, isSmallDesktop, language, width, smallWidth, englishWidth, smallEnglishWidth) => {
  let widthButton = 0;
  if (language === 'en') {
    widthButton = englishWidth;
    if (isSmallDesktop) {
      widthButton = smallEnglishWidth;
    }
  }
  else {
    widthButton = width;
    if (isSmallDesktop) {
      widthButton = smallWidth;
    }
  }

  if (!isMobile) {
    if (hover) {
      return widthButton + 20;
    }
  }
  return widthButton;
};
