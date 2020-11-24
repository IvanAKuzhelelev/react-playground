/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";

const BasicToggle = () => {
  const Colors = ["blue", "pink"];
  return (
    <React.Fragment>
      <div
        css={css`
          display: inline-block;
        `}
      >
        <input
          type="checkbox"
          id="toggle"
          css={css`
            :checked + label {
              background-color: #2e2635;
            }
          `}
        />
        <label
          htmlFor="toggle"
          css={css`
            width: 6rem;
            height: 2rem;
            display: block;
            background-color: violet;
            border-radius: 50px;
          `}
        />
      </div>
    </React.Fragment>
  );
};
export default BasicToggle;
