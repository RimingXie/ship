import React, { createContext } from 'react'
import classNames from 'classnames'
import Col, { ColProps } from './col'
import { type } from 'os';

export type Align = 'top' | 'middle' | 'bottom'
export type Breakpoint = 'xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs';
export type Gutter = number | [number, number]
export type Justify = 'start' | 'end' | 'center' | 'space-around' | 'space-between'
export interface RowProps extends React.HTMLAttributes<HTMLDivElement> {
  /** 垂直对齐方式 */
  align?: Align;
  /** 栅格间隔，数值或者使用数组形式同时设置 [水平间距, 垂直间距] */
  gutter?: Gutter;
  /** 水平排列方式 */
  justify?: Justify;
  /** 是否自动换行 */
  wrap?: boolean
}

interface IGridContext {
  gutters?: Array<number>;
  wrap?: boolean
}

export const GridContext = createContext<IGridContext>({})

export const Row: React.FC<RowProps> = (props) => {
  const { align, gutter, justify, wrap, className, children, style, ...others } = props
  const classes = classNames('row', className, {
    [`row-no-wrap`]: wrap === false,
    [`row-${justify}`]: justify,
    [`row-${align}`]: align,
  })
  const gutters = Array.isArray(gutter) ? gutter : [gutter, 0]

  const passedContext: IGridContext = {
    gutters: gutters as Array<number>,
    wrap: wrap
  }
  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElement = child as React.FunctionComponentElement<ColProps>;
      const { displayName } = childElement.type
      if (displayName === 'Col') {
        return child
      } else {
        console.error("Warning: Row has achild which is not a Col component")
      }
    })
  }
  const rowStyle = {
    ...(gutters[0]! > 0
      ? {
        marginLeft: gutters[0]! / -2,
        marginRight: gutters[0]! / -2,
      }
      : {}),
    ...(gutters[1]! > 0
      ? {
        marginTop: gutters[1]! / -2,
        marginBottom: gutters[1]! / 2,
      }
      : {}),
    ...style,
  };
  return (
    <div className={classes} style={rowStyle} {...others}>
      <GridContext.Provider value={passedContext}>
        {renderChildren()}
      </GridContext.Provider>
    </div>
  )
}

Row.defaultProps = {
  gutter: 0,
  wrap: true
}

export default Row;