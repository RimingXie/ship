import React from 'react';
import classNames from 'classnames';

export interface TagProps extends React.HTMLAttributes<HTMLElement>{

}

/**
 * 进行标记和分类的小标签。
 * ```
 * import { Tag } from 'ship-ui'
 * ```
 */
export const Tag: React.FC<TagProps> = (props) => {
  const {className, ...others} = props
  const classes = classNames('tag', className, {

  })
  return (
    <div className={classes} {...others}></div>
  )
}

export default Tag;