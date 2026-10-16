export type HardwareProject = {
  number: string;
  title: string;
  description: string;
  tags: string[];
  flow: string[];
};

export const hardwareProjects: HardwareProject[] = [
  {
    number: "H1",
    title: "Smart Sensor–Actuator Automation System",
    description:
      "An ESP32-based embedded system that combines environmental and motion sensing with automatic actuator responses and Flutter-based manual or automatic control.",
    tags: ["ESP32", "DHT11", "PIR", "Flutter"],
    flow: ["DHT11 / PIR sensing", "ESP32 control logic", "Actuators / mobile control"],
  },
  {
    number: "H2",
    title: "Digital Door Lock Using Logic Circuits",
    description:
      "A hardware-only configurable door-lock concept built from logic ICs, comparators, flip-flops, DIP switches, and direct wiring for password setting, changing, and verification.",
    tags: ["Logic ICs", "Comparator", "Flip-flops", "DIP switches"],
    flow: ["Password input", "Compare + state logic", "Verify / access output"],
  },
  {
    number: "H3",
    title: "ESP32 Sumobot Controller",
    description:
      "A sensor-assisted mobile robot controller focused on opponent detection, boundary awareness, motor control, wireless operation, and embedded troubleshooting.",
    tags: ["ESP32", "Sensors", "Motor control", "Wireless control"],
    flow: ["Opponent / boundary sensors", "ESP32 decision logic", "Drive motors"],
  },
];
