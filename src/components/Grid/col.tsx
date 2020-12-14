import React, { useContext } from 'react'
import classNames from 'classnames'
import {GridContext} from './row'

type FlexType = number | 'none' | 'auto' | string;

export interface ColProps extends React.HTMLAttributes<HTMLDivElement> {
  /** flex 布局属性 */
  flex?: string | number;
  /** 栅格左侧的间隔格数，间隔内不可以有栅格 */
  offset?: number;
  /** 栅格顺序 */
  order?: number;
  /** 栅格向左移动格数 */
  pull?: number;
  /** 栅格向右移动格数 */
  push?: number;
  /** 栅格占位格数，为 0 时相当于 `display: none` */
  span?: number;
}

function parseFlex(flex: FlexType): string {
  if (typeof flex === 'number') {
    return `${flex} ${flex} auto`;
  }

  if (/^\d+(\.\d+)?(px|em|rem|%)$/.test(flex)) {
    return `0 0 ${flex}`;
  }

  return flex;
}

export const Col: React.FC<ColProps> =(props) => {
  const {
    span,
    order,
    offset,
    push,
    pull,
    className,
    children,
    flex,
    style,
    ...others
  } = props;
  const classes = classNames('col', className, {
    [`col-${span}`]: span,
    [`col-offset-${offset}`]: offset,
    [`col-order-${order}`]: order,
    [`col-pull-${pull}`]: pull,
    [`col-push-${push}`]: push,
  })
  const context = useContext(GridContext)
  const { gutters, wrap } = context
  let colStyle: React.CSSProperties = {...style};
  if(gutters){
    colStyle = {
      ...(gutters[0] > 0 ? {
        paddingLeft: gutters[0] / 2,
        paddingRight: gutters[0] / 2
      }: {}),
      ...(gutters[1] > 0 ? {
        paddingTop: gutters[1] / 2,
        paddingBottom: gutters[1] / 2
      }: {}),
      ...style
    }
  }

  if (flex) {
    colStyle.flex = parseFlex(flex);
    if (flex === 'auto' && wrap === false && !colStyle.minWidth) {
      colStyle.minWidth = 0;
    }
  }
  
  return(
    <div className={classes} style={colStyle} {...others}>{children}</div>
  )
}

Col.defaultProps = {
  span: 24,
  offset: 0,
  order: 0,
  pull: 0,
  push: 0
}

Col.displayName = 'Col'
export default Col;