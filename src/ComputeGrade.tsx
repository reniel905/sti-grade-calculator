interface ComputeGradeProp {
  prelim: number;
  midterm: number;
  prefinal: number;
  final: number;
}

function getGradeEquivalent(grade: number): string {
    if (grade >= 97.5) {
      return "1.0 Excellent!";
    } else if (grade >= 94.5) {
      return "1.25 Very Good!";
    } else if (grade >= 91.5) {
      return "1.50 Very Good!";
    } else if (grade >= 88.5) {
      return "1.75 Very Good!";
    } else if (grade >= 85.5) {
      return "2.00 Satisfactory!";
    } else if (grade >= 81.5) {
      return "2.25 Satisfactory!";
    } else if (grade >= 77.5) {
      return "2.50 Satisfactory!";
    } else if (grade >= 73.5) {
      return "2.75 Fair";
    } else if (grade >= 69.5) {
      return "3.00 Fair";
    } else {
      return "5.00 Failed";
    }
  }
  

function ComputeGrade(computeGradeProp: ComputeGradeProp) {
  const getComputedGrade = (
    prelim: number,
    midterm: number,
    prefinal: number,
    final: number
  ): number => {
    return (
      (prelim / 100) * 20 +
      (midterm / 100) * 20 +
      (prefinal / 100) * 20 +
      (final / 100) * 40
    );
  };

  const computedGrade = getComputedGrade(
    computeGradeProp.prelim,
    computeGradeProp.midterm,
    computeGradeProp.prefinal,
    computeGradeProp.final
  );

  // Format the computed grade to two decimal places or default to 0
  const formattedGrade = isNaN(computedGrade)
    ? "0.00"
    : computedGrade.toFixed(2);

  return (
    <div
      className="container-sm"
      style={{ textAlign: "center", marginTop: "50px" }}
    >
      <h1>{formattedGrade}</h1>
      <h2>Equivalent: {getGradeEquivalent(computedGrade)}</h2>
    </div>
  );
}

export default ComputeGrade;
