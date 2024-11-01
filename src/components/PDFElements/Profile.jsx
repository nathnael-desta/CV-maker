import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import ProfileCss from "../../styles/PDFElementsCSS/Profile.module.css";

const Profile = () => {
  return (
    <View className={ProfileCss.container}>
      <Text className={ProfileCss.title}>Profile</Text>
      <Text className={ProfileCss.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat minima odio veniam laborum saepe blanditiis eligendi nemo, iste nisi numquam! Nulla blanditiis distinctio odit eveniet deserunt esse adipisci, asperiores repellendus odio pariatur quibusdam modi nostrum rem facilis neque labore qui ipsum consequuntur voluptates repudiandae debitis iste culpa? Velit iure maiores, esse asperiores consequatur laboriosam explicabo sed aut cumque, magnam illum et rerum nemo consectetur repellendus atque, quia magni ratione maxime libero fugiat quaerat sit voluptatem molestias? Nam, asperiores? Facilis suscipit dignissimos, commodi perspiciatis totam cum voluptas quia itaque alias sequi quaerat quidem enim facere sit nisi laborum nesciunt fugiat molestiae?</Text>
    </View>
  );
};

export default Profile;
