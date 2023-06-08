import classNames from "classnames";
import React from "react";

const Skeleton = ({ times, className }) => {
  const outerClassnames = classNames(
    'relative',
    'overflow-hidden',
    'bg-gray-200',
    'rounded',
    'mb-2.5',
    className
  );
  const innerClassnames = classNames(
    'animate-shimmer',
    'absolute',
    'inset-0',
    '-translate-X-full',
    'bg-gradient-to-r',
    'from-gray-200',
    'via-white',
    'to-gray-200'
  );
  const boxes = Array(times)
    .fill(0)
    .map((_, i) => {
      return (
        <div key={i} className={outerClassnames}>
          <div className={innerClassnames} />
        </div>
      );
    });

  return boxes;
};

export default Skeleton;
