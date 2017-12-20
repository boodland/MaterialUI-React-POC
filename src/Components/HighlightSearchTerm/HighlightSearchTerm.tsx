import * as React from 'react';

type HighlightSearchTermProps = {
  text: string;
};

export type StateToProps = {
  searchTerm: string
};

const HighlightSearchTerm = ({ text, searchTerm }: HighlightSearchTermProps & StateToProps) => {
  const escapeRegex = searchTerm.replace('/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g', '\\$&');
  const searchRegexUniqueTokens = new RegExp(`(${escapeRegex})`, 'gi');
  let parts = text.split(searchRegexUniqueTokens);
  return (
    <span>
      {
        parts.map((part, i) =>
          part.toLowerCase() === searchTerm.toLowerCase() ?
            <mark key={i}>{part}</mark> :
            part
        )
      }
    </span>
  );
};

export default HighlightSearchTerm;
