def combo_string(a, b):
  return (a if len(a)<len(b) else b) + (a if len(a)>len(b) else b) + (a if len(a)<len(b) else b)