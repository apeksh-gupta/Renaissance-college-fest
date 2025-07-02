import React from "react";
import { Sparkles } from "./Sparkles";

function Particles() {
  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden bg-black pointer-events-none">
      {/* Background Effects */}
      <div className="absolute inset-0 [mask-image:radial-gradient(50%_50%,white,transparent)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#369eff,transparent_70%)] before:opacity-60">
        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff2c_1px,transparent_1px),linear-gradient(to_bottom,#3a3a3a01_1px,transparent_1px)] bg-[size:70px_80px]"></div>
        {/* Sparkles Effect */}
        <Sparkles
          density={400}
          size={1.4}
          direction="top"
          className="absolute inset-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
        />
      </div>
    </div>
  );
}

export default Particles;
