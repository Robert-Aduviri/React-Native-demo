import React from 'react';
import { View, Text, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ({ album }) => {
  const { thumbnail_image, title, artist, image } = album;
  const { 
    thumbnailContainerStyle,
    headerContentStyle,
    headerTextStyle,
    thumbnailStyle,
    imageStyle
  } = styles;
  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image 
            source={{ uri: thumbnail_image }} 
            style={thumbnailStyle} 
          />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}> {title} </Text>
          <Text style={headerTextStyle}> {artist} </Text>
        </View>
      </CardSection>
      <CardSection>
        <Image 
          source={{ uri: image }} 
          style={imageStyle} 
        />
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    justifyContent: 'space-around', 
    flexDirection: 'column'
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  thumbnailStyle: {
    width: 50,
    height: 50
  },
  headerTextStyle: {
    fontSize: 18
  },
  imageStyle: {
    width: 200,
    height: 200,
  }
};

export default AlbumDetail;
