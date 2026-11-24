import {
  Lightbulb, MessageSquare, Video, Star, TrendingUp, Users, Rocket, Trophy,
  Target, Briefcase, Layers, Award, Search, Mic, Globe, Gamepad2, Share2,
  Linkedin, Mail, ArrowRight, ArrowUpRight, Download, Send, User,
  GraduationCap, Menu, X, Sparkles,
} from "lucide-react";

const map = {
  lightbulb: Lightbulb, message: MessageSquare, video: Video, star: Star,
  trending: TrendingUp, users: Users, rocket: Rocket, trophy: Trophy,
  target: Target, briefcase: Briefcase, layers: Layers, award: Award,
  search: Search, mic: Mic, globe: Globe, gamepad: Gamepad2, share: Share2,
  linkedin: Linkedin, mail: Mail, arrowRight: ArrowRight,
  arrowUpRight: ArrowUpRight, download: Download, send: Send, user: User,
  grad: GraduationCap, menu: Menu, close: X,
};

export default function Icon({ name, size = 20, ...rest }) {
  const C = map[name] || Sparkles;
  return <C size={size} {...rest} />;
}