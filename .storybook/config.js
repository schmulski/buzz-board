import { configure, addDecorator } from "@storybook/react";
import styled from "styled-components/macro";
import React from "react";
import { withInfo } from "@storybook/addon-info";

// automatically import all files ending in *.stories.js
configure(require.context("../src/stories", true, /\.stories\.js$/), module);
addDecorator(withInfo);
