// eslint-disable-next-line max-len
export const buttonWidth = (hover, isMobile, language, width, mobileWidth, englishWidth, englishMobileWidth) => {
  let widthButton = width;
  if (isMobile) {
    widthButton = mobileWidth;
  }
  if (language === 'en') {
    widthButton = englishWidth;
    if (isMobile) {
      widthButton = englishMobileWidth;
    }
  }
  if (hover) {
    return widthButton + 20;
  }
  return widthButton;
};

export const className = (name, hover, langage) => {
  let classNames = `button__container button__container--${name}`;
  if (hover) {
    classNames = `button__container--${name} button__container button__container--hover`;
  }
  if (langage === 'en') {
    classNames = `button__container--${name} button__container--${name}--en button__container`;
    if (hover) {
      classNames = `button__container--${name} button__container button__container--hover button__container--${name}--en`;
    }
  }
  return classNames;
};
