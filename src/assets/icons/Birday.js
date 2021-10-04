import * as React from 'react';
import Svg, {Path, Pattern, Defs, Use, Image} from 'react-native-svg';
export const Birday = props => {
  return (
    <Svg
      width={26}
      height={26}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}>
      <Path fill="url(#prefix__pattern0)" d="M0 0h26v26H0z" />
      <Defs>
        <Pattern
          id="prefix__pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}>
          <Use xlinkHref="#prefix__image0" transform="scale(.03846)" />
        </Pattern>
        <Image
          id="prefix__image0"
          width={26}
          height={26}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAABmJLR0QA/wD/AP+gvaeTAAABdUlEQVRIDe2Wu0oDQRSGTwyI2nkrLMROMbU2gmKtr2AvaKmtlYWNN7DzAQL2eQHtFFvBC+gSNekCopUi8Tub7GZglmSW3dHG8H97DmfPJbM7DFsUSf07oaIBr+BNk3T+hDeYAm86oHOzzRnWWQXnzFZiDXMJqmURGQYveqHrLJSgCs4qOme2Eu8wz/AFV/AAXjRD13UoQw3OIXdd0DHaCJHVGOHe6uudEmd8x17HWeq43b1C99vWXV2JGXSuT7Mic0Bq/39Q6kf2pwVDTD+GQER0d2UhEJEjGARLh0SyNE+q3aenpTqRpOQsMT2maCtibu+BMGJf9CB9ssNx5BHvFpKU2HOezAo0QI8bPZn38MdhBLbhGj7gHdTfwo7CGOzCPWit9qjgz4GlUyILEP2LCfw1uAEduomdhv42JewO1CEQkQ3QGozoJljEKUMo86xqhpH8L+EM8x3lP8Lo+KuD9DvA12PTNWnvqjqrXPRjUAM+0IWs/AASfo2onSsVvAAAAABJRU5ErkJggg=="
        />
      </Defs>
    </Svg>
  );
};
