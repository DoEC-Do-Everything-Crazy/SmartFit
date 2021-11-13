import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
export const WeightBig = props => {
  const {color} = props;
  return (
    <Svg
      width={70}
      height={70}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M61.139 15.253C61.139 6.842 54.297 0 45.886 0c-8.411 0-15.253 6.842-15.253 15.253 0 7.919 6.065 14.446 13.795 15.182v36.648H8.859V70h43.535v-2.917h-5.05V30.435c7.73-.736 13.795-7.263 13.795-15.182zM45.886 27.589c-6.802 0-12.336-5.534-12.336-12.336 0-6.802 5.534-12.336 12.336-12.336 6.802 0 12.336 5.534 12.336 12.336 0 6.802-5.534 12.336-12.336 12.336z"
        fill={color}
      />
      <Path
        d="M47.344 3.918h-2.916v2.837h2.916V3.918zM47.344 23.751h-2.916v2.837h2.916V23.75zM57.22 13.794h-2.836v2.917h2.837v-2.917zM37.389 13.794h-2.837v2.917h2.837v-2.917zM46.739 16.435l-6.294 4.54-1.706-2.364 6.294-4.54 1.706 2.364zM14.197 64.117h22.897c.806 0 1.459-.652 1.459-1.458V42.792c0-.18-.055-.64-.353-.95l-.004-.004-4.22-4.875a1.456 1.456 0 00-1.103-.504H18.418c-.423 0-.826.184-1.102.504l-4.222 4.875-.004.005a1.446 1.446 0 00-.352.95v19.866c0 .806.653 1.458 1.459 1.458zm4.887-24.741h13.122l1.697 1.958H17.388l1.696-1.958zm-3.429 4.875h19.981V61.2H15.655V44.25z"
        fill={color}
      />
    </Svg>
  );
};
