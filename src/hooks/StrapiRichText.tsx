// components/StrapiRichText.tsx
import React from "react";

export const StrapiRichText = ({ content }) => {
  const renderText = (node) => {
    let text = node.text;

    if (node.bold) {
      text = <strong>{text}</strong>;
    }

    if (node.italic) {
      text = <em>{text}</em>;
    }

    if (node.underline) {
      text = <u>{text}</u>;
    }

    return text;
  };

  const renderNode = (node, index) => {
    switch (node.type) {
      case "paragraph":
        return (
          <p
            key={index}
            className="text-textPrimary mt-5 lg:text-lg xll:text-xl"
          >
            {node.children.map((child, i) => renderText(child, i))}
          </p>
        );
      // Add more cases (e.g., heading, quote, list, etc.) if needed
      default:
        return null;
    }
  };

  return (
    <div>
      {Array.isArray(content) &&
        content.map((node, index) => renderNode(node, index))}
    </div>
  );
};
