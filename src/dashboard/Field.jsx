import pickImage from "../utils/pickImage";

// label: التسمية | value: القيمة الحالية | onChange: تُستدعى بالقيمة الجديدة | area: نوع الحقل
export default function Field({ label, value, onChange, area }) {
  const val = value || "";   // نتجنب undefined

  // حقل الأيقونة: إيموجي (نص) أو صورة صغيرة
  if (area === "icon") {
    const isImg = val.startsWith("data:") || val.startsWith("http") || val.startsWith("/");
    return (
      <div className="fld">{label}
        <div className="imgf">
          {isImg
            ? <img src={val} alt="" />
            : <input value={val} placeholder="😀" style={{ maxWidth: 90 }} onChange={(e) => onChange(e.target.value)} />}
          <input type="file" accept="image/*" onChange={(e) => e.target.files[0] && pickImage(e.target.files[0], onChange, 160)} />
          {isImg && <button className="btn" onClick={() => onChange("")}>حذف الصورة</button>}
        </div>
      </div>
    );
  }

  // حقل الصورة: رفع من الجهاز أو كتابة مسار ملف موجود في public
  if (area === "img") {
    const isData = val.startsWith("data:");   // هل الصورة مرفوعة (base64) أم مسار؟
    return (
      <div className="fld">{label}
        <div className="imgf">
          {val && <img src={val} alt="" />}
          <input type="file" accept="image/*" onChange={(e) => e.target.files[0] && pickImage(e.target.files[0], onChange)} />
          {val && <button className="btn" onClick={() => onChange("")}>حذف الصورة</button>}
        </div>
        {/* خانة المسار تظهر فقط إن لم تكن الصورة مرفوعة */}
        {!isData && (
          <input value={val} dir="ltr" placeholder="/images/projects/techno.jpg" onChange={(e) => onChange(e.target.value)} />
        )}
      </div>
    );
  }

  // الحقول العادية: dir="auto" يضبط اتجاه الكتابة حسب اللغة المكتوبة
  const props = { value: val, dir: "auto", onChange: (e) => onChange(e.target.value) };
  return (
    <label className="fld">{label}
      {area ? <textarea rows="3" {...props} /> : <input {...props} />}
    </label>
  );
}