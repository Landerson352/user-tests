import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { find } from 'lodash';
import { Box } from '@chakra-ui/core';

import {
 faSearch,
} from '@fortawesome/pro-light-svg-icons';

const icons = [
  faSearch,
];

library.add(...icons);

/*
  When we render the icon with an un-prefixed name,
    we look up the name in the library,
    and add the appropriate prefix
 */

const getIcon = (icon) => {
  if (typeof icon !== 'string') return icon;

  const libraryIcon = find(icons, { iconName: icon });
  if (!libraryIcon) return icon;
  return [libraryIcon.prefix, icon];
};

const Icon = (props) => {
  const { border, fixedWidth, flip, icon, inverse, listItem, pull, pulse, rotation, spin, swapOpacity, ...restProps } = props;
  const faProps = { border, fixedWidth, flip, inverse, listItem, pull, pulse, rotation, spin, swapOpacity };
  const asComponent = (asProps) => <FontAwesomeIcon icon={getIcon(icon)} {...faProps} {...asProps} />;
  return <Box as={asComponent} {...restProps} />;
};

export default Icon;
