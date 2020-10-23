import React, {useState, useEffect} from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonAvatar,
  IonText
} from '@ionic/react';

const Home = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonText>QR SCAN</IonText>

        <IonButton onClick={() =>HomePage.startScan()}>
          <IonIcon icon = {reader} />
        </IonButton>

        <IonButton onClick={() =>HomePage.reset()}>
          <IonIcon icon = {refresh} />
        </IonButton>

        {/* <video hidden="!scanActive" width="100%">
          
        </video> */}

        <IonButton onClick={() =>HomePage.stopScan()}>
          <IonIcon icon = {square} />
        </IonButton>


      </IonContent>
    </IonPage>
  );
};

export default Home;
