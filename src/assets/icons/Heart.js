import * as React from 'react';
import Svg, {Rect} from 'react-native-svg';
export const Heart = props => {
  return (
    <Svg
      width={92}
      height={32}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Rect y={8} width={4} height={16} rx={2} fill="#045694" />
      <Rect x={8} width={4} height={32} rx={2} fill="#045694" />
      <Rect x={16} y={4} width={4} height={24} rx={2} fill="#045694" />
      <Rect x={24} width={4} height={32} rx={2} fill="#045694" />
      <Rect x={32} y={8} width={4} height={16} rx={2} fill="#045694" />
      <Rect x={40} width={4} height={32} rx={2} fill="#045694" />
      <Rect x={48} y={4} width={4} height={24} rx={2} fill="#045694" />
      <Rect x={56} y={7} width={4} height={18} rx={2} fill="#045694" />
      <Rect x={64} width={4} height={32} rx={2} fill="#045694" />
      <Rect x={72} y={4} width={4} height={24} rx={2} fill="#045694" />
      <Rect x={80} width={4} height={32} rx={2} fill="#045694" />
      <Rect x={88} y={9} width={4} height={16} rx={2} fill="#045694" />
    </Svg>
  );
};
