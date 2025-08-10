export function useTypewriter(text: string) {
  const currentText = ref("");
  const isDone = computed(() => currentText.value === text);

  onMounted(() => {
    let i = 0;
    const typeWriter = () => {
      if (i < text.length) {
        currentText.value += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
      }
    };
    setTimeout(typeWriter, 1000);
  });

  return {
    isDone,
    currentText,
  };
}
