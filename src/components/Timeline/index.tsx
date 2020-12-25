import React from 'react';
import Timeline, {TimelineProps} from './timeline';
import TimelineItem, {TimelineItemProps} from './timelineItem';

export type ITimelineComponent = React.FC<TimelineProps> & {
  Item: React.FC<TimelineItemProps>
}

const TransTimeline = Timeline as ITimelineComponent;

TransTimeline.Item = TimelineItem;

export default TransTimeline