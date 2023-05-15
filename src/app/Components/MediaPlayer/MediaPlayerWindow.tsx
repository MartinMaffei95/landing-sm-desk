import ExecutableContainer from '@/app/Components/Executable/ExecutableContainer/ExecutableContainer';
import MediaPlayer from '@/app/Components/MediaPlayer/MediaPlayer';
import React from 'react';

const MediaPlayerWindow = () => {
  return (
    <ExecutableContainer onClose="close" folderName="Windows Media Player">
      <MediaPlayer />
    </ExecutableContainer>
  );
};

export default MediaPlayerWindow;
