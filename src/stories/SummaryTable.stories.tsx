import React from "react";
import { Story, Meta } from "@storybook/react";
import SummaryTable from "../components/SummaryTable";
import { Provider } from "react-redux";
import store from "../store/store";

export default {
  title: "Components/SummaryTable",
  component: SummaryTable,
  parameters: {
    docs: {
      description: {
        component: "Your SummaryTable component description goes here.",
      },
    },
  },
} as Meta;

const Template: Story = (args) => (
  <Provider store={store}>
    <SummaryTable {...args} />
  </Provider>
);

export const Default = Template.bind({});
Default.args = {};
