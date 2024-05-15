import React, { useState } from 'react';

const ReadMoreText = ({ text, maxLength }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const trimmedText = isExpanded ? text : text.slice(0, maxLength);

  return (
    <div>
      <p>{trimmedText}</p>
      {text.length > maxLength && (
        <p style={{color:"blue" , cursor:"pointer" }} onClick={toggleExpand}>
          {isExpanded ? 'Read Less' : 'Read More'}
        </p>
      )}
    </div>
  );
};

const Content = () => {
  const longText =
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"

  return (
    <div>
      <ReadMoreText text={longText} maxLength={360} />
    </div>
  );
};

export default Content;