import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
    container : {
        display:"flex",
        flexDirection: "column",
        gap: 20,
        alignItems: "flex-start"
    }
})

const Profile = () => {
  return (
    <View style={styles.container}>
      <Text >Profile</Text>
      <Text >Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat minima odio veniam laborum saepe blanditiis eligendi nemo, iste nisi numquam! Nulla blanditiis distinctio odit eveniet deserunt esse adipisci, asperiores repellendus odio pariatur quibusdam modi nostrum rem facilis neque labore qui ipsum consequuntur voluptates repudiandae debitis iste culpa? Velit iure maiores, esse asperiores consequatur laboriosam explicabo sed aut cumque, magnam illum et rerum nemo consectetur repellendus atque, quia magni ratione maxime libero fugiat quaerat sit voluptatem molestias? Nam, asperiores? Facilis suscipit dignissimos, commodi perspiciatis totam cum voluptas quia itaque alias sequi quaerat quidem enim facere sit nisi laborum nesciunt fugiat molestiae?</Text>
    </View>
  );
};

export default Profile;
