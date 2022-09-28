import { Chip } from '@mui/material';
import {
  bgcolor,
  compose,
  display,
  flexbox,
  positions,
  sizing,
  spacing,
  styled,
  typography,
} from '@mui/system';
const MBChip = styled(Chip)(
  compose(spacing, positions, typography, sizing, bgcolor, flexbox, display)
);
export default MBChip;
