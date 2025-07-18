export default function Map({ width, height }: any) {
    return (
        <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2437.5168292674424!2d5.978527!3d52.2123014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c7a4e548c828c3%3A0xf68268d1089a3586!2sDIEP%20Opleidingen!5e0!3m2!1sen!2snl!4v1721193872000!5m2!1sen!2snl"
            width={width || "100%"}
            height={height || "180"}
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
        />
    );
}
