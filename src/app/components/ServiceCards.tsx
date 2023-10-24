import Image from "next/image";
import textAnalyses from "../images/text-analysis.jpg";
import visualAnalyses from "../images/visual-analysis.jpg";
import agents from "../images/agents.jpg";
import rl from "../images/rl.jpg";

export default function ServiceCards(){
  return (
    <div className="flex flex-row justify-between">
      <div className="flex flex-col">
        <Image
          className="mb-6"
          src={textAnalyses}
          width={300}
          alt={"Text analyses"}
        />
        <div className="text-lg"><b>Text analysis</b></div>
        <div className="w-72">Sentiment Analysis, Topic Modeling, Named Entity Recognition...</div>
      </div>
      <div className="flex flex-col">
        <Image
          className="mb-6"
          src={visualAnalyses}
          width={300}
          alt={"Visual analysis"}
        />
        <div className="text-lg"><b>Visual analysis</b></div>
        <div className="w-72">Object Detection, Facial Recognition, Scene Recognition...</div>
        
      </div>
      <div className="flex flex-col">
        <Image
          className="mb-6"
          src={agents}
          width={300}
          alt={"Visual analyses"}
        />
        <div className="text-lg"><b>Conversational Agents</b></div>
        <div className="w-72">Chatbots, Task-Oriented Dialog Systems, Voice Assistants...</div>
      </div>
      <div className="flex flex-col">
        <Image
          className="mb-6"
          src={rl}
          width={300}
          alt={"Visual analyses"}
        />
        <div className="text-lg"><b>Reinforecement Learning Agents</b></div>
        <div className="w-72">Decision Optimization, Adaptive Systems, Simulation-Based Learning...</div>
      </div>
    </div>
  );
};
