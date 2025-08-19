import toast from "react-hot-toast";

export function useNotify() {
  return {
    success: (msg: string) =>
      toast.success(msg, {
        icon: "✅",
      }),
    error: (msg: string) =>
      toast.error(msg, {
        icon: "⚠️",
      }),
    info: (msg: string) =>
      toast(msg, {
        icon: "ℹ️",
      }),
  };
}
