function searchStudents(students: string[], query: string): string[] {
  return  new Intl.DateTimeFormat("en-GB", {
            minute: "numeric",
            second: "numeric",
          }).format(25 * 60 * 1000)
}

searchStudents(["Jack", "Jill", "Harry"], "J");
