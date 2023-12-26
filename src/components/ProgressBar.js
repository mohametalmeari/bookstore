import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const ProgressBar = ({ percentage, length, thickness }) => {
  const [coord, setCoord] = useState({
    x1: 90, y1: 79, x2: 82, y2: 74, dir1: 0, dir2: 1,
  });
  const center = length / 2;

  const handleCoord = () => {
    let angle = (2 * Math.PI * percentage) / 100;
    if (percentage <= 0) {
      angle = 0.04;
    } else if (percentage >= 100) {
      angle = 1.994 * Math.PI;
    }
    const x1 = center + center * Math.sin(angle);
    const y1 = (center - center * Math.cos(angle));
    const x2 = (center + (center - thickness) * Math.sin(angle));
    const y2 = (center - (center - thickness) * Math.cos(angle));
    const dir1 = (percentage > 50 ? 1 : 0);
    const dir2 = (percentage > 50 ? 0 : 1);
    setCoord({
      x1, y1, x2, y2, dir1, dir2,
    });
  };

  useEffect(() => {
    handleCoord();
  }, [percentage, length, thickness]);

  return (
    <div className="progress-icon">
      <svg width={length} height={length} xmlns="http://www.w3.org/2000/svg">
        <path
          d={`M${center} 0 
              A${center} ${center} 0 ${coord.dir1} 1 ${coord.x1} ${coord.y1} 
              L${coord.x2} ${coord.y2} 
              A${center - thickness} ${center - thickness} 0 ${coord.dir1} 0 ${center} ${thickness} Z`}
          fill="#3697ed"
        />

        <path
          d={`M${center} 0 
              A${center} ${center} 0 ${coord.dir2} 0 ${coord.x1} ${coord.y1} 
              L${coord.x2} ${coord.y2} 
              A${center - thickness} ${center - thickness} 0 ${coord.dir2} 1 ${center} ${thickness} Z`}
          fill="#e8e8e8"
        />
      </svg>
    </div>
  );
};
export default ProgressBar;

ProgressBar.propTypes = {
  percentage: PropTypes.number.isRequired,
  length: PropTypes.number,
  thickness: PropTypes.number,
};
ProgressBar.defaultProps = {
  length: 100,
  thickness: 7,
};
