import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0'
import { SelectProps, SelectSizes } from './select'
import Select from './index'
import Radio from '../Radio';
const { Option } = Select;
export default {
  title: 'ship-ui/Select',
  component: Select
} as Meta;

const Basic: Story<SelectProps> = (args) => {
  function handleChange(value: any) {
    console.log(`selected ${value}`);
  }
  return (
    <>
      <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
        <Option value="jack">Jack111</Option>
        <Option value="lucy">Lucy</Option>
        <Option value="disabled" disabled>
          Disabled
      </Option>
        <Option value="Yiminghe">yiminghe</Option>
      </Select>
      <Select defaultValue="lucy" style={{ width: 120 }} disabled>
        <Option value="lucy">Lucy</Option>
      </Select>
      <Select defaultValue="lucy" style={{ width: 120 }} loading>
        <Option value="lucy">Lucy</Option>
      </Select>
      <Select defaultValue="lucy" style={{ width: 120 }} allowClear>
        <Option value="lucy">Lucy</Option>
      </Select>
    </>
  )
}

export const 基本使用 = Basic.bind({})

const SelectSearch: Story<SelectProps> = (args) => {
  function onChange(value: any) {
    console.log(`selected ${value}`);
  }

  function onBlur() {
    console.log('blur');
  }

  function onFocus() {
    console.log('focus');
  }

  function onSearch(val: any) {
    console.log('search:', val);
  }
  return (
    <Select
      showSearch
      style={{ width: 200 }}
      placeholder="Select a person"
      optionFilterProp="children"
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      onSearch={onSearch}
      filterOption={(input, option) => {
        return option?.value.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }

      }
    >
      <Option value="jack">Jack</Option>
      <Option value="lucy">Lucy</Option>
      <Option value="tom">Tom</Option>
    </Select>
  )
}

export const 带搜索框 = SelectSearch.bind({})

const MultipleSelection: Story<SelectProps> = (args) => {
  const children = [];
  for (let i = 10; i < 36; i++) {
    children.push(<Option value={i.toString(36) + i} key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
  }

  function handleChange(value: any) {
    console.log(`selected ${value}`);
  }
  return (
    <>
      <Select
        mode="multiple"
        allowClear
        style={{ width: '100%' }}
        placeholder="Please select"
        defaultValue={['a10', 'c12']}
        onChange={handleChange}
      >
        {children}
      </Select>
      <br />
      <Select
        mode="multiple"
        disabled
        style={{ width: '100%' }}
        placeholder="Please select"
        defaultValue={['a10', 'c12']}
        onChange={handleChange}
      >
        {children}
      </Select>
    </>
  )
}

export const 多选 = MultipleSelection.bind({})

const Sizes: Story<SelectProps> = (args) => {
  const children = [];
  for (let i = 10; i < 36; i++) {
    children.push(<Option value={i.toString(36) + i} key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
  }

  function handleChange(value: any) {
    console.log(`selected ${value}`);
  }
  const [size, setSize] = React.useState('default');

  const handleSizeChange = (e: any) => {
    setSize(e.target.value);
  };
  return (
    <>
      <Radio.Group value={size} onChange={handleSizeChange}>
        <Radio.Button value="large">Large</Radio.Button>
        <Radio.Button value="default">Default</Radio.Button>
        <Radio.Button value="small">Small</Radio.Button>
      </Radio.Group>
      <br />
      <br />
      <Select size={size as SelectSizes} defaultValue="a1" onChange={handleChange} style={{ width: 200 }}>
        {children}
      </Select>
      <br />
      <Select
        mode="multiple"
        size={size as SelectSizes}
        placeholder="Please select"
        defaultValue={['a10', 'c12']}
        onChange={handleChange}
        style={{ width: '100%' }}
      >
        {children}
      </Select>
      <br />
      <Select
        mode="tags"
        size={size as SelectSizes}
        placeholder="Please select"
        defaultValue={['a10', 'c12']}
        onChange={handleChange}
        style={{ width: '100%' }}
      >
        {children}
      </Select>
    </>
  )
}

export const 三种尺寸 = Sizes.bind({})

const CustomRender: Story<SelectProps> = (args) => {
  function handleChange(value: any) {
    console.log(`selected ${value}`);
  }
  return (
    <Select
    mode="multiple"
    style={{ width: '100%' }}
    placeholder="select one country"
    defaultValue={['china']}
    onChange={handleChange}
    optionLabelProp="label"
  >
    <Option value="china" label="China">
      <div className="demo-option-label-item">
        <span role="img" aria-label="China">
          🇨🇳
        </span>
        China (中国)
      </div>
    </Option>
    <Option value="usa" label="USA">
      <div className="demo-option-label-item">
        <span role="img" aria-label="USA">
          🇺🇸
        </span>
        USA (美国)
      </div>
    </Option>
    <Option value="japan" label="Japan">
      <div className="demo-option-label-item">
        <span role="img" aria-label="Japan">
          🇯🇵
        </span>
        Japan (日本)
      </div>
    </Option>
    <Option value="korea" label="Korea">
      <div className="demo-option-label-item">
        <span role="img" aria-label="Korea">
          🇰🇷
        </span>
        Korea (韩国)
      </div>
    </Option>
  </Select>
  )
}

export const 定制回填内容 = CustomRender.bind({})
