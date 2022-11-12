import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  ImageBackground,
  Text,
  Dimensions,
} from 'react-native';
import Scale from '../Function/Scale';
import {FontSize, Colors} from '../Theme';

const ImgSize = Scale(375, 24, 24);
const GalleryImgSize = Scale(375, 64, 64);
const RatingList = ({img, title, description, rating, imgList}) => {
  return (
    <View>
      <View style={[styles.row, styles.titleContainer, styles.topSpacing]}>
        <Image source={{uri: img}} style={styles.img} />
        <Text style={styles.title}>{title}</Text>
        <View style={styles.rating}>
          <Text style={styles.ratingtext}>{rating}</Text>
        </View>
      </View>
      <Text style={[styles.description, styles.spacing]}>{description}</Text>
      <View style={[styles.row, styles.between]}>
        {imgList &&
          imgList.slice(0, 5).map((data, key) => {
            return (
              <ImageBackground
                key={key}
                imageStyle={{borderRadius: 8}}
                style={[styles.galleryimg]}
                source={{uri: data}}>
                {key === 4 && imgList.length - 1 > 4 && (
                  <View style={[styles.overlay]}>
                    <Text style={styles.overlayText}>
                      {'+' + (imgList.length - 4)}
                    </Text>
                  </View>
                )}
              </ImageBackground>
            );
          })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  flex: {
    flex: 1,
  },
  between: {
    justifyContent: 'space-between',
  },
  spacing: {
    paddingVertical: FontSize.Subhead,
  },
  topSpacing: {
    paddingTop: FontSize.Subhead * 1.7,
  },
  img: {
    width: ImgSize.WIDTH,
    height: ImgSize.HEIGHT,
    borderRadius: 50,
  },
  title: {
    paddingLeft: Dimensions.get('window').width * 0.03,
    fontSize: FontSize.Body,
    fontWeight: '600',
  },
  description: {
    fontSize: FontSize.Body,
  },
  rating: {
    backgroundColor: Colors.green,
    paddingHorizontal: Dimensions.get('window').width * 0.023,
    borderRadius: 10,
    justifyContent: 'center',
    marginLeft: FontSize.Caption,
  },
  ratingtext: {
    fontSize: FontSize.Caption,
    lineHeight: FontSize.Caption * 1.25,
    color: Colors.white,
  },
  galleryimg: {
    width: GalleryImgSize.WIDTH,
    height: GalleryImgSize.HEIGHT,
    borderRadius: 8,
    overflow: 'hidden',
  },
  overlayText: {
    color: Colors.white,
    fontSize: FontSize.Caption,
  },
  overlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.black + '44',
  },
});

export default RatingList;
