import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Volume2, Waveform, Settings2, Filter } from "lucide-react";

function App() {
  return (
    <div className="min-h-screen bg-background p-8 flex items-center justify-center">
      <Card className="w-[380px] p-6 bg-zinc-950 border-zinc-800">
        <div className="space-y-6">
          {/* Header */}
          <div className="flex items-center space-x-2">
            <Settings2 className="w-5 h-5 text-purple-500" />
            <h2 className="text-xl font-semibold tracking-tight">Audio Settings</h2>
          </div>
          
          <Separator className="bg-zinc-800" />
          
          {/* Audio Controls */}
          <div className="space-y-6">
            {/* Gain Control */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Volume2 className="w-4 h-4 text-zinc-400" />
                  <label className="text-sm font-medium text-zinc-200">Gain</label>
                </div>
                <span className="text-xs text-zinc-400">70%</span>
              </div>
              <Slider
                defaultValue={[70]}
                max={100}
                step={1}
                className="w-full"
              />
            </div>

            {/* Bitrate Control */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Waveform className="w-4 h-4 text-zinc-400" />
                  <label className="text-sm font-medium text-zinc-200">Bitrate</label>
                </div>
                <span className="text-xs text-zinc-400">320 kbps</span>
              </div>
              <Slider
                defaultValue={[320]}
                max={320}
                step={32}
                className="w-full"
              />
            </div>

            {/* Filters Section */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Filter className="w-4 h-4 text-zinc-400" />
                <h3 className="text-sm font-medium text-zinc-200">Filters</h3>
              </div>
              
              <div className="space-y-3">
                {/* Filter Switches */}
                {['Static Gain', 'High-Pass Filter', 'Output dB', 'Client Detection'].map((filter) => (
                  <div key={filter} className="flex items-center justify-between">
                    <label className="text-sm text-zinc-400">{filter}</label>
                    <Switch />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default App;