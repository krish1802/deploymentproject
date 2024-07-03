import cv2
import mediapipe as mp
import time
import math


class handDetector():
    def __init__(self, mode=False, maxHands = 2, detectionCon=0.5, trackCon=0.5):
        # detectionCon = bool(detectionCon)
        # trackCon = bool(trackCon)
        self.mode = mode
        self.maxHands = maxHands
        self.detectionCon = detectionCon 
        self.trackCon = trackCon

        self.mpHands = mp.solutions.hands
        self.hands = self.mpHands.Hands(static_image_mode=self.mode,
            max_num_hands=self.maxHands,
            min_detection_confidence=self.detectionCon,
            min_tracking_confidence=self.trackCon)
        self.mpDraw = mp.solutions.drawing_utils
    
    def findHands(self, img,draw=True):
        imgRGB = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
        self.results = self.hands.process(imgRGB)
        #print(results.multi_hand_landmarks)
        if self.results.multi_hand_landmarks:
            for handLms in self.results.multi_hand_landmarks:
                if draw:
                   self.mpDraw.draw_landmarks(img, handLms,self.mpHands.HAND_CONNECTIONS)

        return img   

    def findPosition(self, img, handNo=0,draw=True): 
        lmList = []
        if self.results.multi_hand_landmarks:
            myHand = self.results.multi_hand_landmarks[handNo]   
            for id,lm in enumerate(myHand.landmark):
                #print(id,lm)
                h, w, c = img.shape
                cx, cy = int(lm.x*w), int(lm.y*h)
                #print(id,cx, cy)
                lmList.append((id, cx, cy))
                if draw:
                    cv2.circle(img,(cx,cy),5,(255,0,255),cv2.FILLED)
        return lmList
    
    def isPalmFacingCamera(self, lmList):
        # Assuming lmList is populated with the correct landmarks
        if lmList:
            # Define the landmarks for the index finger and thumb
            index_tip = lmList[8][1:]  # We only need the x, y coordinates
            thumb_tip = lmList[4][1:]
            # Calculate the distance between the index tip and thumb tip
            distance = math.hypot(index_tip[0] - thumb_tip[0],
                                  index_tip[1] - thumb_tip[1])
            # Define a threshold distance to determine if the palm is open
            THRESHOLD = 50  # This value may need to be adjusted
            if distance > THRESHOLD:
                return True  # Palm is likely facing the camera
        return False  # Default case if no hand is detected or palm is not open

    
def main():
    ptime = 0
    ctime = 0
    cap = cv2.VideoCapture(0)
    detector = handDetector()

    while True:
        success,img = cap.read()
        if not success:
            print("Ignoring empty camera frame.")
        
        img = detector.findHands(img)
        lmList = detector.findPosition(img)
        if len(lmList) != 0:
            print(lmList[4])

    
        ctime = time.time()
        fps=1/(ctime-ptime)
        ptime=ctime
    
        cv2.putText(img,str(int(fps)),(10,70),cv2.FONT_HERSHEY_PLAIN,3,(255,0,255),3)
    
        cv2.imshow("Image",img)
        if cv2.waitKey(1) & 0xFF == ord('q'):
            break

    cap.release()
    cv2.destroyAllWindows()

if __name__ == "__main__":
    main()