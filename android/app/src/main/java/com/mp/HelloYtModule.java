import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
public class HelloYtModule extends ReactContextBaseJavaModule{
        public HelloYtModule(ReactApplicationContext reactcontext) {
        super(reactcontext);
    }
    @NonNull
    @Override
    public String getName() {
        return "HelloYt";
    }
@ReactMethod
    public void sayHello(String name, Callback callback) {
        try{
            String message="hello" +name;
            callback.invoke(null,message);
        }
        catch(Exception e){
            callback.invoke(e,null);
        }
    }

}