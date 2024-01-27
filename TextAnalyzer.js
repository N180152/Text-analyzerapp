import React, { useState } from 'react';

const TextAnalyzer = () => {
  const [text, setText] = useState('');
  const [wordCount, setWordCount] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [sentenceCount, setSentenceCount] = useState(0);
  const [paragraphCount, setParagraphCount] = useState(0);
  const [spaceCount, setSpaceCount] = useState(0);
  const [punctuationCount, setPunctuationCount] = useState(0);

  const analyzeText = () => {
    const words = text.split(/\s+/).filter((word) => word.length > 0);
    const sentences = text.split(/[.!?]+/).filter((sentence) => sentence.length > 0);
    const paragraphs = text.split(/\n+/).filter((paragraph) => paragraph.length > 0);
    
    setWordCount(words.length);
    setCharCount(text.length);
    setSentenceCount(sentences.length);
    setParagraphCount(paragraphs.length);
    setSpaceCount(text.split(' ').length - 1);
    setPunctuationCount((text.match(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g) || []).length);
  };

  const resultTabStyle = {
    cursor: 'pointer',
    padding: '15px',
    marginBottom: '10px',
    backgroundColor: '#f0f0f0',
    border: '1px solid #ddd',
    borderRadius: '4px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const countStyle = {
    fontWeight: 'bold',
    marginLeft: '10px', // Add more styles as needed
  };

  return (
    <div style={{ maxWidth: '600px', margin: 'auto', padding: '20px', backgroundColor: '#fff', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
      <textarea
        style={{ width: '100%', marginBottom: '20px', padding: '15px', fontSize: '16px' }}
        placeholder="Enter text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        style={{ cursor: 'pointer', padding: '15px', backgroundColor: '#4caf50', color: 'white', border: 'none', borderRadius: '4px' }}
        onClick={analyzeText}
      >
        Analyze
      </button>

      <div style={{ marginTop: '20px' }}>
        <div style={resultTabStyle}>
          <span>Word Count:</span> <span style={countStyle}>{wordCount}</span>
        </div>
        <div style={resultTabStyle}>
          <span>Character Count:</span> <span style={countStyle}>{charCount}</span>
        </div>
        <div style={resultTabStyle}>
          <span>Sentence Count:</span> <span style={countStyle}>{sentenceCount}</span>
        </div>
        <div style={resultTabStyle}>
          <span>Paragraph Count:</span> <span style={countStyle}>{paragraphCount}</span>
        </div>
        <div style={resultTabStyle}>
          <span>Space Count:</span> <span style={countStyle}>{spaceCount}</span>
        </div>
        <div style={resultTabStyle}>
          <span>Punctuation Count:</span> <span style={countStyle}>{punctuationCount}</span>
        </div>
      </div>
    </div>
  );
};

export default TextAnalyzer;

